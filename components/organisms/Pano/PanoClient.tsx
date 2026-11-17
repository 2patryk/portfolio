"use client";

import dynamic from "next/dynamic";

const PanoClient = dynamic(() => import("./Pano"), { ssr: false });

export default PanoClient;
