import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className=" text-white  flex justify-start flex-col items-center ">
      <div className="max-w-7xl bg-[#FFCCB8] flex items-center justify-center gap-10 my-20 mb-20 rounded-lg p-8 px-40 ">

        {/* Header */}
        <div className="flex flex-col items-start justify-start gap-6 mb-4 ">
            <div className="flex justify-center items-center gap-4">
                               <div
                 style={{
                   width: "60px",
                   height: "60px",
                   borderRadius: "50%",
                   background: "white",
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   flexShrink: 0,
                 }}
>
  <Mail size={28} style={{ color: "#E54259" }} />
  
</div>
                <h2 className="text-xl font-semibold leading-snug text-white">
                     S'abonner à la newsletter{" "}
                    <span style={{ color: "#E54259" }}>PICKS</span>
                </h2>

            </div>

           
          
           {/* Description */}
        <p
          className="text-sm leading-relaxed "
         
        >
          Tous les 15 jours, le meilleur des nouvelles tendances du digital dans votre boîte mail.
        </p>
        </div>

       

        {/* CTA */}
        <div className="pl-[52px]">
          <a
            href="/Newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                       text-sm font-medium text-white transition-colors duration-150"
            style={{ background: "#E54259" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#c73a4f")}
            onMouseLeave={e => (e.currentTarget.style.background = "#E54259")}
            onMouseDown={e  => (e.currentTarget.style.background = "#b0323f")}
            onMouseUp={e    => (e.currentTarget.style.background = "#c73a4f")}
          >
            S'abonner
          </a>
        </div>

      </div>
    </section>
  );
}