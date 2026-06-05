import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const scanRoots = ["app", "data", "docs", "templates", "README.md", "CODEX.md"];
const allowedExtensions = new Set([".ts", ".tsx", ".js", ".mjs", ".md", ".csv", ".json"]);

const checks = [
  {
    label: "email",
    pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
  },
  {
    label: "phone_like_number",
    pattern: /(?<![\w-])(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]?){2,}\d{3,4}(?![\w-])/g
  },
  {
    label: "whatsapp_invite",
    pattern: /(?:chat\.whatsapp\.com|wa\.me)\/[A-Za-z0-9/?=&_.-]+/gi
  },
  {
    label: "zoom_or_meet_private_link",
    pattern: /(?:zoom\.us\/j\/|meet\.google\.com\/)[A-Za-z0-9/?=&_.-]+/gi
  },
  {
    label: "private_google_asset",
    pattern: /(?:docs|drive)\.google\.com\/(?:spreadsheets|document|presentation|forms|drive\/folders|file\/d)\/d?\/?[A-Za-z0-9_-]{20,}/gi
  },
  {
    label: "notion_page_id",
    pattern: /notion\.(?:so|site)\/[^\s)]*[0-9a-f]{32}/gi
  },
  {
    label: "secret_token",
    pattern: /\b(?:sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9_]{20,}|AIza[0-9A-Za-z_-]{25,}|xox[baprs]-[A-Za-z0-9-]{10,})\b/g
  }
];

function extensionOf(path) {
  const index = path.lastIndexOf(".");
  return index >= 0 ? path.slice(index) : "";
}

function listFiles(path) {
  const fullPath = join(root, path);
  const stats = statSync(fullPath);

  if (stats.isFile()) {
    return allowedExtensions.has(extensionOf(fullPath)) ? [fullPath] : [];
  }

  return readdirSync(fullPath, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith(".") || entry.name === "node_modules" || entry.name === "out") {
      return [];
    }
    const child = join(path, entry.name);
    return entry.isDirectory() ? listFiles(child) : listFiles(child);
  });
}

const findings = [];

for (const file of scanRoots.flatMap(listFiles)) {
  const text = readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);

  lines.forEach((line, index) => {
    checks.forEach((check) => {
      check.pattern.lastIndex = 0;
      if (check.pattern.test(line)) {
        findings.push({
          file: relative(root, file),
          line: index + 1,
          check: check.label
        });
      }
    });
  });
}

if (findings.length) {
  console.error("Privacy check failed. Remove private data before publishing:");
  findings.slice(0, 50).forEach((finding) => {
    console.error(`- ${finding.file}:${finding.line} ${finding.check}`);
  });
  if (findings.length > 50) {
    console.error(`...and ${findings.length - 50} more findings`);
  }
  process.exit(1);
}

console.log("Privacy check passed.");
