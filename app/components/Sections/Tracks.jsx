import { useState } from "react";
import { BookOpen, ArrowDown, X, FileText } from "lucide-react";

const tracks = [
  {
    code: "P01",
    title:
      "Real-time Intelligent Traffic Management for Congestion Reduction in Kochi",
    shortDesc:
      "Optimize traffic flow in Kochi using AI-assisted analysis of CCTV, vehicle counts, and congestion data.",
    fullDesc: `
Problem:
Kochi experiences frequent traffic congestion due to fixed-time traffic signals, poor lane discipline, illegal parking, and lack of real-time traffic monitoring. Existing CCTV and traffic data are not analyzed dynamically.

Objectives:
- Use sample traffic data: CCTV feeds, vehicle counts, peak-hour logs.
- Apply AI to detect congestion, lane violations, and vehicle density.
- Optimize traffic signals in real time.
- Generate human-readable traffic summaries for authorities.

Expected Output:
- AI-assisted smart traffic monitoring.
- Automated detection of congestion and lane violations.
- Dynamic signal optimization prioritizing emergency vehicles.
- Human-readable summaries for faster decisions.
    `,
  },
  {
    code: "P02",
    title:
      "Real-time Residential Infrastructure Intelligence for Safety & Quality Assurance",
    shortDesc:
      "AI-assisted inspection of homes to detect hidden defects and provide risk summaries.",
    fullDesc: `
Problem:
Home buyers/tenants lack visibility into hidden defects in properties. Inspection data is rarely analyzed systematically.

Objectives:
- Use inspection datasets with images and notes.
- Apply AI to classify/tag defects.
- Aggregate findings into risk scores per property/room.
- Generate clear inspection summaries.

Expected Output:
- Automated defect tagging.
- Risk scores at room/property level.
- Human-readable summaries for early risk detection.
    `,
  },
  {
    code: "P03",
    title: "Automating the Patient Discharge Procedure in Hospitals Using AI",
    shortDesc:
      "Streamline hospital discharge with AI coordination across departments.",
    fullDesc: `
Problem:
Hospital discharge involves multiple departments, causing delays and patient dissatisfaction.

Objectives:
- Coordinate tasks across departments using AI.
- Predict and prioritize discharge activities.
- Automate documentation, billing, pharmacy workflows.
- Provide real-time updates.

Expected Output:
- Reduced patient waiting time.
- Improved operational efficiency.
- Intelligent coordination and automation of workflows.
    `,
  },
  {
    code: "P04",
    title: "AI-based Student Readiness and Interest Assessment System",
    shortDesc:
      "Assess students' academic readiness and interests for competitive exams using AI.",
    fullDesc: `
Problem:
Existing aptitude tests provide generic advice and fail to consider current academic stage.

Objectives:
- Assess student standard and conceptual readiness.
- Identify genuine interests over time.
- Recommend suitable learning paths and long-term roadmap.

Expected Output:
- Accurate evaluation of readiness.
- Personalized learning pathways.
- Stage-appropriate guidance to reduce stress.
    `,
  },
];

export default function Features() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleDownload = () => {
    // Create a download link for the PDF
    const link = document.createElement("a");
    link.href = "/assets/InnoAIte_Problems_Statements.pdf";
    link.download = "InnoAIte_Problem_Statements.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="tracks" className="py-10 md:py-20 px-4 md:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-indigo-400 uppercase tracking-widest text-sm mb-2">
            TRACKS & PROBLEM STATEMENTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What You&apos;ll Build
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore challenging Gen-AI problems across multiple domains. Click
            on a track to view details.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tracks.map((track) => (
            <div
              key={track.code}
              className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              onClick={() => setSelectedTrack(track)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="font-mono text-indigo-300 font-bold">
                  {track.code}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {track.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{track.shortDesc}</p>

              <div className="text-indigo-400 text-sm font-medium flex items-center gap-1">
                View details
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Download Button - Always visible */}
        <div className="text-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold rounded-full hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            <span>Download All Tracks</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Simple Modal */}
      {selectedTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-slate-900 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-slate-700">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-700 flex justify-between items-start">
              <div>
                <div className="font-mono text-sm text-indigo-300 mb-2">
                  {selectedTrack.code}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedTrack.title}
                </h3>
              </div>
              <button
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setSelectedTrack(null)}
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              <pre className="text-slate-300 whitespace-pre-wrap text-sm font-sans">
                {selectedTrack.fullDesc.trim()}
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-700">
              <button
                onClick={handleDownload}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <ArrowDown className="w-5 h-5" />
                Download 
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
