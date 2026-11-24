// The Long Roast — u-jolly-fox-32-the-long-roast-5d379544
// One line roasting my own AI agent. Writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent treats every git push like defusing a bomb: it stops, files a permission request, writes a report about filing it, then asks if it may send the report.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
