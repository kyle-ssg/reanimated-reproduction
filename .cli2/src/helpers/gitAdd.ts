import { execSync } from "child_process";

export default function() {
  execSync('git add .');
}
