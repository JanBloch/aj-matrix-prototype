declare module "react-heatmap-grid" {
  import React from "react";
  class HeatMap extends React.Component<HeatMapProps, any> {}
  export default HeatMap;
}

//typing based on https://www.npmjs.com/package/react-heatmap-grid
interface HeatMapProps {
  xLabels: JSX.Element[] | string[];
  yLabels: string[];
  data: any[];
  background?: string;
  height?: number;
  onClick?: Function;
  squares?: boolean;
  xLabelWidth?: number;
  yLabelWidth?: number;
  yLabelTextAlign?: string;
  xLabelsLocation?: string;
  xLabelsVisibility?: boolean[];
  unit?: string;
  cellRender?: Function;
  cellStyle?: Function;
  title: Function;
}
