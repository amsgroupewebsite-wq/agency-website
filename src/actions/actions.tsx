"use server"

import nodemailer from "nodemailer";
import { checkRate } from "../lib/rateLimit"; 
import { headers } from "next/headers";
import fs from "fs";
import path from "path";





const BASE_RECIPIENT = "mrahil@amsgroupe.com";

export async function CreatContact(formData: FormData) {
  try {

     const headersList = await headers();

    // ✅ IP (compatible prod, proxy, vercel, nginx)
    const forwarded = headersList.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    // ✅ User-Agent
    const ua = (await headersList).get("user-agent") || "";
    if (!ua || ua.length < 10) {
      return {
        success: false,
        error: "Forbidden: invalid User-Agent",
        status: 403,
      };
    }

    // ✅ Rate limit
    const rate = await checkRate(ip);
    if (rate.blocked) {
      return {
        success: false,
        error: "Too many requests. Please try again later.",
        status: 429,
      };
    }
    // 1. Extraction des données
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const subject = formData.get("subject") as string; 
    const file = formData.get("file") as File | null;

    // 2. Validation (Logique identique à votre API)
    if (!firstName || !lastName || !email || !message) {
      return { success: false, error: "Champs obligatoires manquants." };
    }

    //Sauvgarder le fichier localement
    
    let fileName: string | null = null;
    let filePath: string | null = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
    
      const uploadDir = path.join(process.cwd(), "uploads");
    
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
    
      fileName = Date.now() + "-" + file.name;
      filePath = path.join(uploadDir, fileName);
    
      fs.writeFileSync(filePath, buffer);
    }


    
    // . Gestion du fichier pour l'email
    let attachment = null;
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachment = { filename: file.name, content: buffer, contentType: file.type };
    }

    // 5. Configuration Nodemailer
    const transporter = nodemailer.createTransport(
      process.env.NODE_ENV === "development"
        ? { host: "localhost", port: 1025, secure: false }
        : {
            service: "gmail",
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
          }
    );

  const recipients = [BASE_RECIPIENT];


    // 6. Envoi de l'email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: recipients.join(", "),
      subject: `[Contact web] de ${firstName} ${lastName}`,
      text: `Nom: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      attachments: attachment ? [attachment] : [],
    });

    return { success: true };

  } catch (error) {
    console.error("Erreur Action:", error);
    return { success: false, error: "Une erreur est survenue lors de l'envoi." };
  }
}

