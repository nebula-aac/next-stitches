'use client'
import { Fragment } from "react";
import { Button } from "@/components/button/button";
import { styled } from "@/stitches.config";

const Heading = styled('h1', {
  color: 'Purple'
})

export default function Page() {
  return (
    <Fragment>
      <div>
        <Heading>Next.js 13 with Stitches.dev</Heading>
        <Button>Stitches Button</Button>
      </div>
    </Fragment>
  )
}