"use client";
import { FC, useEffect, useState } from "react";
import { Template, Designer, Form, Viewer, BLANK_PDF } from "@pdfme/ui";
import { Template as TemplateG, generate } from "@pdfme/generator";

type pageProps = {
  dbtemplate: any;
  selected: number
};

const Canvas: FC<pageProps> = ({ dbtemplate, selected }) => {
  //  console.log(JSON.parse(dbtemplate[0].basepdf))
  let domContainer;
  let designer;

  useEffect(() => {
    const obj = JSON.parse(dbtemplate[selected].basepdf)
    // 👇️ call method in useEffect hook
    domContainer = document.getElementById("container") as HTMLElement; 
    // console.log(obj);

    // const inputs = [{ a: 'a1', b: 'b1', c: 'c1' }];

    // console.log("designer", designer)
    const inputs = [{}];
    const template: TemplateG = obj;

    //  const viewer = new Viewer({ domContainer, template, inputs });

     designer = new Designer({ domContainer, template });

    //  console.log(designer)
  }, []);

  if (!dbtemplate) {
    return null;
  }


  return (
    <div className="w-full h-full">
      <div className="flex gap-5 py-2 justify-center w-ful">
        <button className="rounded-full px-2 bg-primaryBlue">Get Template</button>
        <button className="rounded-full px-2 bg-red-200">Preview PDF</button>
      </div>
      <div id="container" className="w-full h-full"></div>;
    </div>
  );
};

export default Canvas;
