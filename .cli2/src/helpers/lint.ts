import { execSync } from "child_process";

export default function() {
  execSync('cd ../ && npm run lint:fix');
}
