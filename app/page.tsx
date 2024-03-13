"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from 'next/link';
import ImageUpLoad from './ui/ImageUpLoad';

interface HomeTypes {

}

const Home: React.FC<HomeTypes> = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ImageUpLoad/>
    </main>
  );
};
export default Home;
