const a="56938980598",d="info@rentas.com";document.getElementById("whatsapp-contact")?.addEventListener("click",()=>{const e=`¡Hola! Me gustaría obtener información sobre las propiedades disponibles en Rentas.

Enviado desde: rentas.com/contact
Fecha: ${new Date().toLocaleString("es-ES")}`;window.open(`https://wa.me/${a}?text=${encodeURIComponent(e)}`,"_blank")});document.getElementById("email-contact")?.addEventListener("click",()=>{const e="Consulta sobre propiedades - Rentas",t=`Hola equipo de Rentas,

Me gustaría obtener más información sobre sus propiedades disponibles.

Enviado desde: rentas.com/contact
Fecha: ${new Date().toLocaleString("es-ES")}

Saludos`;window.open(`mailto:${d}?subject=${encodeURIComponent(e)}&body=${encodeURIComponent(t)}`,"_blank")});function i(){const e=document.getElementById("contact-form");if(!e)return null;const t=new FormData(e);return{name:t.get("name")||"",email:t.get("email")||"",phone:t.get("phone")||"",inquiryType:t.get("inquiry-type")||"",message:t.get("message")||""}}function c(){const e=document.getElementById("contact-form");if(!e)return!1;const t=e.querySelectorAll("[required]");let o=!0;return t.forEach(n=>{n.value.trim()?n.classList.remove("border-red-300","focus:ring-red-500"):(n.classList.add("border-red-300","focus:ring-red-500"),o=!1)}),o||s("Please fill in all required fields","error"),o}function s(e,t="success"){const o={success:"bg-green-500",error:"bg-red-500"},n=document.createElement("div");n.className=`fixed top-4 left-4 right-4 lg:left-auto lg:right-4 lg:w-80 ${o[t]} text-white px-4 py-3 rounded-xl shadow-lg z-50 transform -translate-y-full opacity-0 transition-all duration-300`,n.innerHTML=`
      <div class="flex items-center justify-between">
        <span class="font-medium">${e}</span>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-3 text-white/80 hover:text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    `,document.body.appendChild(n),setTimeout(()=>{n.classList.remove("-translate-y-full","opacity-0")},100),setTimeout(()=>{document.body.contains(n)&&(n.classList.add("-translate-y-full","opacity-0"),setTimeout(()=>{document.body.contains(n)&&document.body.removeChild(n)},300))},4e3)}function l(){const e=document.getElementById("contact-form");e&&(e.reset(),e.querySelectorAll("input, select, textarea").forEach(o=>{o.classList.remove("border-red-300","focus:ring-red-500")}))}document.getElementById("whatsapp-btn")?.addEventListener("click",function(){if(!c())return;const e=i();if(!e)return;const o={booking:"Consulta de Reserva",property:"Información de Propiedad",support:"Soporte al Cliente",partnership:"Asociación de Propiedad",feedback:"Comentarios",other:"Otro"}[e.inquiryType]||e.inquiryType,n=`🏠 *RENTAS - NUEVA CONSULTA*

👤 *Cliente:* ${e.name}
📧 *Email:* ${e.email}
📱 *Teléfono:* ${e.phone||"No proporcionado"}

📋 *Consulta:* ${o}

💬 *Mensaje:*
${e.message}

⏰ ${new Date().toLocaleString("es-ES")}
🌐 Enviado desde: rentas.com/contact`;window.open(`https://wa.me/${a}?text=${encodeURIComponent(n)}`,"_blank"),s("✅ Redirecting to WhatsApp...","success"),setTimeout(()=>l(),1e3)});document.getElementById("gmail-btn")?.addEventListener("click",async function(){if(!c())return;const e=i();if(!e)return;const t=this,o=t.innerHTML;t.disabled=!0,t.innerHTML=`
      <svg class="animate-spin w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Sending...</span>
    `;try{const r=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,email:e.email,phone:e.phone,inquiryType:e.inquiryType,message:e.message})})).json();if(r.success)s("✅ Email sent successfully!","success"),l();else throw new Error(r.error||"Unknown error")}catch(n){console.error("Error:",n),s("❌ Error sending email. Please try again.","error")}finally{t.disabled=!1,t.innerHTML=o}});
