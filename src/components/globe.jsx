import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "tailwindcss",
  "react",
  "nodedotjs",
  "nextdotjs",
  "python",
  "c",
  "cpp",
  "firebase",
  "vercel",
  "aws",
  "docker",
  "mongodb",
  "postgresql",
  "graphql",
  "git",
  "githubactions",
  "webpack",
  "redux",
  "jest",
  "testing",
  "storybook",
  "figma",
  "vscode",
  "linux",
  "bash",
  "cloud",
  "animation",
  "webdevelopment",
  "softwareengineering",
  "fullstack",
  "frontend",
  "backend",
  "github",
  "visualstudiocode",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
