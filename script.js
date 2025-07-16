async function generateReport() {
    const { jsPDF } = window.jspdf;
    
    // Obtener todos los valores del formulario
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const projectName = document.getElementById("projectName").value;
    const projectDate = document.getElementById("projectDate").value;
    const projectDescription = document.getElementById("projectDescription").value;

    // Crear el documento PDF
    const doc = new jsPDF();
    
    // Configurar el estilo del título
    doc.setFontSize(20);
    doc.setTextColor(110, 142, 251); // Color azul similar al del formulario
    doc.text("Informe de Usuario", 105, 20, { align: "center" });
    
    // Configurar el estilo del contenido
    doc.setFontSize(12);
    doc.setTextColor(51, 51, 51); // Color gris oscuro para el contenido
    
    // Información Personal
    doc.setFontSize(14);
    doc.setTextColor(110, 142, 251);
    doc.text("Información Personal", 20, 35);
    
    doc.setFontSize(12);
    doc.setTextColor(51, 51, 51);
    doc.text("Nombre: " + name, 20, 45);
    doc.text("Edad: " + age + " años", 20, 55);
    
    // Información de Contacto
    doc.setFontSize(14);
    doc.setTextColor(110, 142, 251);
    doc.text("Información de Contacto", 20, 85);
    
    doc.setFontSize(12);
    doc.setTextColor(51, 51, 51);
    doc.text("Correo Electrónico: " + email, 20, 95);
    doc.text("Teléfono: " + phone, 20, 105);
    
    // Información del Proyecto
    doc.setFontSize(14);
    doc.setTextColor(110, 142, 251);
    doc.text("Información del Proyecto", 20, 125);
    
    doc.setFontSize(12);
    doc.setTextColor(51, 51, 51);
    doc.text("Nombre del Proyecto: " + projectName, 20, 135);
    doc.text("Fecha: " + projectDate, 20, 145);
    
    // Descripción del proyecto (con manejo de texto largo)
    doc.setFontSize(12);
    doc.text("Descripción:", 20, 155);
    const splitDescription = doc.splitTextToSize(projectDescription, 170);
    doc.text(splitDescription, 20, 165);
    
    // Generar el PDF
    const pdfDataUri = doc.output("datauristring");
    document.getElementById("reportContainer").innerHTML =
        '<iframe width="100%" height="500px" src="' + pdfDataUri + '"></iframe>';
}
   