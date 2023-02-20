"use client";

import { ResponsiveBar } from "@nivo/bar";
import { capitalize } from "lodash";

type ChartElement = {
  id: string;
  label: string;
  value: string | number;
};

function parseAudioFeaturesForChart(
  audioFeatures: SpotifyApi.AudioFeaturesResponse
) {
  const filteredKeys = [
    "valence",
    "speechiness",
    "liveness",
    "instrumentalness",
    "energy",
    "danceability",
    "acousticness"
  ];

  return Object.keys(audioFeatures).reduce((acc, curr) => {
    if (filteredKeys.includes(curr)) {
      const id = capitalize(curr);
      acc.push({
        id,
        label: id,
        value: audioFeatures[curr as keyof SpotifyApi.AudioFeaturesResponse]
      });

      return acc;
    }

    return acc;
  }, [] as ChartElement[]);
}

interface Props {
  audioFeatures: SpotifyApi.AudioFeaturesResponse;
}

export function TrackAudioFeatures({ audioFeatures }: Props) {
  const data = parseAudioFeaturesForChart(audioFeatures);
  return (
    <ResponsiveBar
      data={data}
      keys={["value"]}
      margin={{ top: 0, right: 15, bottom: 50, left: 100 }}
      padding={0.3}
      layout="horizontal"
      theme={{
        textColor: "#9ca3af"
      }}
      colors={{ scheme: "yellow_green" }}
      indexBy="id"
      groupMode="grouped"
      colorBy="indexValue"
      enableLabel={false}
      tooltip={({ indexValue, index }) => (
        <div className="p-2 rounded-md bg-gray-900">
          <strong>
            {indexValue}: {index}
          </strong>
        </div>
      )}
    />
  );
}
