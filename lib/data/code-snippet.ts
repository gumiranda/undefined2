export interface CodeExample {
  language: string;
  label: string;
  code: string;
  filename?: string;
}

export const codeExamples: CodeExample[] = [
  {
    language: "typescript",
    label: "TypeScript",
    filename: "app.ts",
    code: `import { createClient } from "@acme/sdk";

const client = createClient({
  apiKey: process.env.ACME_API_KEY,
  region: "us-east-1",
});

const result = await client.deploy({
  project: "my-app",
  branch: "main",
  environment: "production",
});

console.log(\`Deployed v\${result.version}\`);`,
  },
  {
    language: "python",
    label: "Python",
    filename: "app.py",
    code: `from acme import Client

client = Client(
    api_key=os.environ["ACME_API_KEY"],
    region="us-east-1",
)

result = client.deploy(
    project="my-app",
    branch="main",
    environment="production",
)

print(f"Deployed v{result.version}")`,
  },
  {
    language: "go",
    label: "Go",
    filename: "main.go",
    code: `package main

import "github.com/acme/sdk-go"

func main() {
    client := acme.NewClient(
        acme.WithAPIKey(os.Getenv("ACME_API_KEY")),
        acme.WithRegion("us-east-1"),
    )

    result, err := client.Deploy(acme.DeployInput{
        Project:     "my-app",
        Branch:      "main",
        Environment: "production",
    })

    fmt.Printf("Deployed v%s\\n", result.Version)
}`,
  },
];
