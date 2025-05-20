"use server"

interface RegistrationData {
  name: string
  email: string
  phone: string
  university: string
  course: string
  year: string
  track: string
  teamName: string
  teamSize: string
  projectIdea: string
}

export async function submitRegistration(data: RegistrationData) {
  try {
    // In a real implementation, this would connect to Google Sheets API
    // For now, we'll simulate a successful submission with a delay

    console.log("Registration data received:", data)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real implementation, you would use the Google Sheets API
    // Example with google-spreadsheet package:
    /*
    const { GoogleSpreadsheet } = require('google-spreadsheet');
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      University: data.university,
      Course: data.course,
      Year: data.year,
      Track: data.track,
      TeamName: data.teamName,
      TeamSize: data.teamSize,
      ProjectIdea: data.projectIdea,
      RegistrationDate: new Date().toISOString(),
    });
    */

    // Send confirmation email (simulated)
    console.log(`Sending confirmation email to ${data.email}`)

    return { success: true }
  } catch (error) {
    console.error("Error submitting registration:", error)
    throw new Error("Failed to submit registration")
  }
}
