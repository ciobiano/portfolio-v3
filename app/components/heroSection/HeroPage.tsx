'use client'
import React from 'react'
import { Hero, HeroSubtitle, HeroTitle } from './Hero'
import Button from '../utils/Button'



type Props = {}

export const HeroPage = () => {
  return (
		<Hero>
			<Button href="/" variant="secondary" size="small">
				<span>Blog 2023 Release – {""} coming soon </span> →
			</Button>
			<HeroSubtitle>
				Building bridges between front and back, one line at a time, {""}from pixels
				to databases, I make it all connect.{" "}
			</HeroSubtitle>
			<HeroTitle>Connecting Imagination <br/>& Reality</HeroTitle>
		</Hero>
	);
}