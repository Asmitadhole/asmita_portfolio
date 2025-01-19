import { transporter } from "@/app/lib/transporter";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();
        // Setup email data
        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: "asmidhole20@gmail.com",
            subject: 'Message on Personal Portfolio Website',
            html: `
            <h3>This message might help you get a Job...!!</h3>
            <br/>
            <h2><span style="font-weight: bold;">Name:</span> <span style="font-weight: lighter;">${name}</span></h2>
            <h2><span style="font-weight: bold;">Email:</span> <span style="font-weight: lighter;">${email}</span></h2>
            <h2><span style="font-weight: bold;">Subject:</span> <span style="font-weight: lighter;">${subject}</span></h2>
            <h2><span style="font-weight: bold;">Message:</span> <span style="font-weight: lighter;">${message}</span></h2>
            
            `,
        };

        // Send mail
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);

        return Response.json({ message: "Email sent successfully", success: true })
    } catch (error: any) {
        console.error('Error sending email:', error);
        return Response.json({ message: "Something went wrong!!!", success: false })
    }
}
