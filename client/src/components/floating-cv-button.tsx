import { Download } from "lucide-react";

export default function FloatingCVButton() {
  const handleCVDownload = () => {
    // Replace with actual Google Drive PDF link
    window.open("https://bit.ly/yhassanCVfeb2025", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button 
        onClick={handleCVDownload}
        className="bg-accent text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all duration-300 flex items-center space-x-2 text-sm font-medium"
      >
        <Download className="h-4 w-4" />
        <span>Download CV</span>
      </button>
    </div>
  );
}
