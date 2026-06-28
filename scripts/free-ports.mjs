import { execSync } from "node:child_process";

for (const port of [5173, 8787]) {
  try {
    const out = execSync(`lsof -ti:${port} 2>/dev/null`, { encoding: "utf8" }).trim();
    if (!out) continue;
    for (const pid of out.split(/\s+/)) {
      try {
        process.kill(Number(pid), "SIGKILL");
      } catch {
        /* already exited */
      }
    }
  } catch {
    /* port free */
  }
}

console.log("[dev] Cleared ports 5173 & 8787");
