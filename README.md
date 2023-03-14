Oze Front end Test

Table of Contents:
Design
Frameworks Used
Setup
Methodology
Current State

## Design
I created this app using the human interface design process. I first created the app and its design system according to a Persona I created. These designs were the guiding hand for implementation. The designs for this implementation can be found here (https://www.figma.com/file/hdVOAHMFLUxv0AYGCkoEYt/Github-Profile-VIewer?node-id=11%3A3501&t=kmHLMDWNuTsly5tX-1)

## Frameworks and Tech Used
I used React, Axios, Typescript, React-Router-DOM V6, and Redux. Vanilla CSS was used.

## Setup
1. Download or clone the repository
2. Run `npm install`
3. Run `npm start`

## Methodology
After completing the design, I wanted to mainly use `useSWR` to be initiating the API calls. This is because SWR has inbuilt caching that would prevent placing un-needed calls to the Github API. After facing some challenges, I opted for Axios. I still believe that the best implementation of this would be completed with SWR.

## Current State
This project is functional with some bugs, apologies
