import React from 'react'

function Paragraph() {
  return (
    <div>
       <h3 className="section-title"  style={{marginTop:"60px"}}>Chart Explanation</h3>
        <p>
        Charts often include an overlaid mathematical function depicting the best-fit trend of the scattered data. This layer is referred to as a best-fit layer and the graph containing this layer is often referred to as a line graph.
        It is simple to construct a "best-fit" layer consisting of a set of line segments connecting adjacent data points; however, such a "best-fit" is usually not an ideal representation of the trend of the underlying scatter data for the following reasons:
        It is highly improbable that the discontinuities in the slope of the best-fit would correspond exactly with the positions of the measurement values.
        </p>
        <p>
        It is highly unlikely that the experimental error in the data is negligible, yet the curve falls exactly through each of the data points.
        In either case, the best-fit layer can reveal trends in the data. Further, measurements such as the gradient or the area under the curve can be made visually, leading to more conclusions or results from the data table.
       
        </p>
    </div>
  )
}

export default Paragraph