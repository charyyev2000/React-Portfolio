import * as React from "react";
import {
  Cloud,
  // renderSimpleIcon,
  renderImg,
  ICloud,
  // renderText,
} from "react-icon-cloud";
import { imgLink } from "../redux/constantLink";

// interface ChildComponentProps {
//   data: any;
// }

export async function getServerSideProps() {
  const res = await fetch(`${constantApi}company-list`);
  const companies = res.json();

  return {
    props: companies,
  };
}

export default function IconCloud({ data, companies }) {
  const containerProps = () => {
    style = {
      // padding: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      paddingTop: 0,
      zIndex: 2000,
    };
  };

  const canvasProps = {};

  const options = {
    imagePadding: 2000,
    clickToFront: 500,
    depth: 0.5,
    imageScale: 0.25,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: false,
  };

  const ImgATag = data.map((item) =>
    renderImg({
      imgProps: {
        src: imgLink + item.logo,
        alt: item.title,
        width: 880,
        height: 880,
      },
      aProps: {
        href: `#${item.title}`,
      },
    })
  );

  // console.log("data:   ", data);
  return (
    <div style={{ zIndex: 100 }}>
      <Cloud
        containerProps={containerProps}
        // style= {{
        //   // padding: "500px",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   width: "100vw",
        //   paddingTop: 0,
        //   zIndex: 2000,
        // }}
        canvasProps={canvasProps}
        options={options}
        // style={{
        //   imagePadding: 2000,
        //   clickToFront: 500,
        //   depth: 0.5,
        //   imageScale: 0.25,
        //   initial: [0.1, -0.1],
        //   outlineColour: "#0000",
        //   reverse: true,
        //   tooltip: "native",
        //   tooltipDelay: 0,
        //   wheelZoom: false,
        // }}
      >
        {ImgATag}
        {/* {data.map((item) => {
          renderImg({
            imgProps: {
              src: imgLink + item.logo,
              alt: item.title,
              width: 1000,
              height: 1000,
            },
            aProps: {
              href: `#${item.title}`,
            },
          });
        })} */}
        {/* {data.map((item) => {
          return (
            <a href="#" key={item.id}>
              <img src={`${imgLink + item.logo}`} alt={item.logo} />
            </a>
          );
        })} */}
      </Cloud>
    </div>
  );
}

// export default Category
