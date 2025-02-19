import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const dataDirectory = path.join(process.cwd(), "public", "data")
    const filePath = path.join(dataDirectory, "projects.json")
    const fileContents = fs.readFileSync(filePath, "utf8")
    const projects = JSON.parse(fileContents)

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error reading projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const dataDirectory = path.join(process.cwd(), "public", "data")
    const filePath = path.join(dataDirectory, "projects.json")

    const fileContents = fs.readFileSync(filePath, "utf8")
    const projects = JSON.parse(fileContents)
    projects.push(data)

    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2))

    return NextResponse.json({ message: "Project added successfully" })
  } catch (error) {
    console.error("Error adding project:", error)
    return NextResponse.json({ error: "Failed to add project" }, { status: 500 })
  }
}