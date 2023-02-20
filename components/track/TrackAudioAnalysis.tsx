"use client";

import { formatDuration } from "utils/formatDuration";

interface Props {
  track: SpotifyApi.TrackObjectFull;
  analysis: SpotifyApi.AudioAnalysisResponse;
}

export function TrackAudioAnalysis({ track, analysis }: Props) {
  const parsedAnalysis = parseAnalysis(analysis);
  return (
    <div className="grid grid-cols-2 gap-4 h-full text-center">
      <div>
        <h6 className="font-semibold">Duration</h6>
        <span>{formatDuration(track.duration_ms)}</span>
      </div>
      <div>
        <h6 className="font-semibold">Popularity</h6>
        <span>{track.popularity}</span>
      </div>
      <div>
        <h6 className="font-semibold">Key</h6>
        <span>{parsedAnalysis.pitch}</span>
      </div>
      <div>
        <h6 className="font-semibold">Modality</h6>
        <span>{parsedAnalysis.modality}</span>
      </div>
      <div>
        <h6 className="font-semibold">Tempo (BPM)</h6>
        <span>{parsedAnalysis.tempo}</span>
      </div>
      <div>
        <h6 className="font-semibold">Time Signature</h6>
        <span>{parsedAnalysis.timeSignature}</span>
      </div>
      <div>
        <h6 className="font-semibold">Bars</h6>
        <span>{parsedAnalysis.bars}</span>
      </div>
      <div>
        <h6 className="font-semibold">Beats</h6>
        <span>{parsedAnalysis.beats}</span>
      </div>
      <div>
        <h6 className="font-semibold">Sections</h6>
        <span>{parsedAnalysis.sections}</span>
      </div>
      <div>
        <h6 className="font-semibold">Segments</h6>
        <span>{parsedAnalysis.segments}</span>
      </div>
    </div>
  );
}

function parsePitch(note: number) {
  let key = "";

  switch (note) {
    case 0:
      key = "C";
      break;
    case 1:
      key = "D♭";
      break;
    case 2:
      key = "D";
      break;
    case 3:
      key = "E♭";
      break;
    case 4:
      key = "E";
      break;
    case 5:
      key = "F";
      break;
    case 6:
      key = "G♭";
      break;
    case 7:
      key = "G";
      break;
    case 8:
      key = "A♭";
      break;
    case 9:
      key = "A";
      break;
    case 10:
      key = "B♭";
      break;
    case 11:
      key = "B";
      break;
    default:
      return null;
  }

  return key;
}

function parseAnalysis(analysis: SpotifyApi.AudioAnalysisResponse) {
  return {
    pitch: parsePitch(analysis.track.key),
    modality: analysis.track.mode === 1 ? "Major" : "Minor",
    timeSignature: analysis.track.time_signature,
    tempo: Math.round(analysis.track.tempo),
    bars: analysis.bars.length,
    beats: analysis.beats.length,
    sections: analysis.sections.length,
    segments: analysis.segments.length
  };
}
