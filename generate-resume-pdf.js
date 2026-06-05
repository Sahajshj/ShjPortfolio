import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

function generatePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const width = doc.internal.pageSize.getWidth(); // Should be 210
  const height = doc.internal.pageSize.getHeight(); // Should be 297

  const margin = 12;
  const contentWidth = width - (margin * 2);

  let y = 14;

  // Helper: horizontal divider
  function drawDivider() {
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.1);
    doc.line(margin, y, width - margin, y);
    y += 1.5;
  }

  // Helper: section title
  function drawSectionTitle(title) {
    y += 1.5;
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(0, 0, 0);
    doc.text(title.toUpperCase(), width / 2, y, { align: 'center' });
    y += 1.5;
    doc.setDrawColor(120, 120, 120);
    doc.setLineWidth(0.2);
    doc.line(margin, y, width - margin, y);
    y += 4;
  }

  // Draw Header
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(21);
  doc.setTextColor(0, 0, 0);
  doc.text("SAHAJPAL SINGH", width / 2, y, { align: 'center' });
  y += 5.5;

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(15, 118, 110); // Teal color
  doc.text("Cloud Engineer  |  AWS Certified SysOps Administrator  |  DevOps Engineer", width / 2, y, { align: 'center' });
  y += 4.5;

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text("+91 8941998996  o  sahajpal1905@gmail.com  o  linkedin.com/in/sahajshj  o  github.com/Sahajshj  o  Uttarakhand, India", width / 2, y, { align: 'center' });
  y += 5.5;

  drawDivider();

  // Draw Summary
  drawSectionTitle("Summary");
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const summaryText = "AWS Certified SysOps Administrator and Cloud Engineer with 1+ year of experience designing, automating, and managing AWS infrastructure using Terraform, Docker, Kubernetes, and CI/CD pipelines. Skilled in Infrastructure as Code (IaC), AWS EKS, Helm chart deployments, Linux administration, cloud monitoring with Prometheus and Grafana, and deployment automation. Experienced in building scalable cloud-native solutions while improving reliability, security, and operational efficiency.";
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth - 2);
  doc.text(splitSummary, margin + 1, y, { align: 'justify' });
  y += (splitSummary.length * 3.5) + 3;

  // Draw Experience
  drawSectionTitle("Experience");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 118, 110); // Teal color
  doc.text("STGi (The Summit Group)", margin + 1, y);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(50, 50, 50);
  doc.text("Panchkula, India", width - margin - 1, y, { align: 'right' });
  y += 4;

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(0, 0, 0);
  doc.text("Developer & Cloud Engineer", margin + 1, y);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("May 2025 - May 2026", width - margin - 1, y, { align: 'right' });
  y += 4;

  doc.setFont("Helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("Provider of cutting-edge technology and professional services to federal customers across health, IT, and education sectors.", margin + 1, y);
  y += 4;

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(60, 60, 60);

  const bulletPoints = [
    "Engineered and maintained 10+ Terraform IaC modules for AWS environments, reducing manual provisioning time by 40%.",
    "Updated 5+ Terraform registry modules, IAM policies, and security rules, improving compliance coverage across environments.",
    "Led Terraform v6 migration and AWS EKS (Kubernetes) configuration updates, reducing deployment failures by 30% and improving cluster stability.",
    "Reviewed and merged 20+ infrastructure Pull Requests through GitHub Actions CI/CD pipelines, maintaining a 0-downtime deployment record.",
    "Configured Datadog monitoring and alerting dashboards, improving incident detection and mean time to resolution (MTTR).",
    "Built and maintained 3+ frontend features for a multi-tenant Loan Origination System using Vue.js, serving 500+ users.",
    "Collaborated with backend engineers and QA teams to resolve 15+ production issues, improving workflow usability by 25%."
  ];

  bulletPoints.forEach((bp) => {
    doc.text("-", margin + 1.5, y);
    const splitBp = doc.splitTextToSize(bp, contentWidth - 6);
    doc.text(splitBp, margin + 4.5, y);
    y += (splitBp.length * 3.1) + 0.3;
  });
  y += 2.5;

  // Draw Education
  drawSectionTitle("Education");
  // Item 1
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 118, 110);
  doc.text("Chitkara University", margin + 1, y);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text("CGPA: 8.44", width - margin - 1, y, { align: 'right' });
  y += 3.8;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text("B.Tech in Computer Science & Engineering", margin + 1, y);
  doc.text("2022 - 2026", width - margin - 1, y, { align: 'right' });
  y += 4.5;

  // Item 2
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.text("CBSE (Class XII)", margin + 1, y);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text("93.8%", width - margin - 1, y, { align: 'right' });
  y += 3.8;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text("Science Streams, Schooling", margin + 1, y);
  doc.text("2020 - 2021", width - margin - 1, y, { align: 'right' });
  y += 4.5;

  // Item 3
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(9);
  doc.text("CBSE (Class X)", margin + 1, y);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text("90.4%", width - margin - 1, y, { align: 'right' });
  y += 3.8;
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text("Schooling", margin + 1, y);
  doc.text("2018 - 2019", width - margin - 1, y, { align: 'right' });
  y += 4;

  // Draw Certifications
  drawSectionTitle("Certifications");
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(0, 0, 0);
  doc.text("AWS Certified SysOps Administrator - Associate", margin + 1, y);
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text("Amazon Web Services  |  2024  |  No Expiry", width - margin - 1, y, { align: 'right' });
  y += 6.5;

  // Draw Technical Skills
  drawSectionTitle("Technical Skills");
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(60, 60, 60);

  const skills = [
    { label: "Cloud & Infrastructure", val: "AWS (EC2, S3, IAM, VPC, CloudWatch, EKS), Terraform, Infrastructure as Code (IaC), Kubernetes, Helm, Docker" },
    { label: "CI/CD & Automation", val: "GitHub Actions, CI/CD Pipelines, Bash Scripting, YAML, Git" },
    { label: "Monitoring & Observability", val: "Datadog, Prometheus, Grafana, CloudWatch" },
    { label: "Backend & Frontend", val: "Node.js, MongoDB, Vue.js, JavaScript, C#, RESTful APIs, JWT Authentication" },
    { label: "Operating Systems", val: "Linux (Ubuntu, Amazon Linux), Windows Server" }
  ];

  skills.forEach((sk) => {
    doc.setFont("Helvetica", "bold");
    doc.text(sk.label + ": ", margin + 1, y);
    const labelWidth = doc.getTextWidth(sk.label + ": ");
    doc.setFont("Helvetica", "normal");
    const splitVal = doc.splitTextToSize(sk.val, contentWidth - labelWidth - 3);
    doc.text(splitVal, margin + 1 + labelWidth, y);
    y += (splitVal.length * 3.3) + 0.3;
  });
  y += 2.5;

  // Draw Awards & Achievements
  drawSectionTitle("Awards & Achievements");
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(8);

  const awards = [
    { title: "RoboSprint - 1st Place", desc: "Ranked 1st out of 50+ teams - built a robotics-based environmental cleaning solution." },
    { title: "Kalp Build Hackathon Winner", desc: "Won among 100+ participants, delivering a blockchain voting system and securing INR 10,000." },
    { title: "Blue Marble Study Program", desc: "Selected among 28 students globally for the Blue Marble Study Program at Deakin University." }
  ];

  awards.forEach((aw) => {
    doc.setFont("Helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(aw.title, margin + 1, y);
    y += 3.2;
    doc.setFont("Helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const splitDesc = doc.splitTextToSize(aw.desc, contentWidth - 4);
    doc.text(splitDesc, margin + 1, y);
    y += (splitDesc.length * 3.2) + 1.2;
  });
  y += 1.5;

  // Draw Projects
  drawSectionTitle("Projects");

  const projects = [
    {
      title: "Uplift - Mental Health Platform",
      year: "2024",
      desc: "Mental health platform providing doctor consultation and community engagement features.",
      bullets: [
        "Expanded backend services with 8+ RESTful APIs using Node.js and MongoDB, supporting scalable data management.",
        "Implemented JWT-based authentication, reducing unauthorized access attempts by 100% in testing."
      ]
    },
    {
      title: "Social Media Application",
      year: "2024",
      desc: "Instagram-inspired social media application with full post and interaction system.",
      bullets: [
        "Enhanced 5+ backend microservice modules including posts, likes, comments, and user management supporting 200+ concurrent users."
      ]
    },
    {
      title: "River Cleaning Robot",
      year: "2023 - 2024",
      desc: "Automated robot solution addressing water pollution using embedded hardware.",
      bullets: [
        "Improved autonomous debris detection to 85% accuracy using Arduino Uno and Raspberry Pi for environmental sustainability."
      ]
    }
  ];

  projects.forEach((proj) => {
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(15, 118, 110);
    doc.text(proj.title, margin + 1, y);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text(proj.year, width - margin - 1, y, { align: 'right' });
    y += 3.5;

    doc.setFont("Helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text(proj.desc, margin + 1, y);
    y += 3.5;

    doc.setFont("Helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    proj.bullets.forEach((b) => {
      doc.text("-", margin + 1.5, y);
      const sB = doc.splitTextToSize(b, contentWidth - 6);
      doc.text(sB, margin + 4.5, y);
      y += (sB.length * 3.1) + 0.3;
    });
    y += 2;
  });

  // Save files
  const data = doc.output('arraybuffer');
  const buffer = Buffer.from(data);

  fs.writeFileSync('Sahajpal_Cloud_Engineer.pdf', buffer);
  fs.writeFileSync('Sahajpal_Singh_Cloud_Engineer.pdf', buffer);

  console.log("PDF files compiled successfully!");
}

generatePDF();
