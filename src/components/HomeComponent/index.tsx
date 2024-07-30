"use client";
import { Container, Grid } from "@mui/material";
import Data from "../../Data.json";
const HomeComponent = () => {
  return (
    <>
      <Container
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item lg={6}>
            <h1 className="text-7xl font-semibold">{Data.DiscoverTitle}</h1>
            <p className="mt-8 text-xl">{Data.description}</p>
            <button className="flex items-center mt-7 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... p-3 rounded-2xl">
              <img src="/images/rocketLaunch.svg" />
              <p className="font-semibold">Get Started</p>
            </button>
            <div className="flex items-center gap-5 mt-8 ">
              {Data.statistics.map(({ id, title, count }) => {
                return (
                  <div key={id}>
                    <p className="font-bold">{count}</p>
                    <p>{title}</p>
                  </div>
                );
              })}
            </div>
          </Grid>
          <Grid item lg={6}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={Data.rocetKosmos} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <p>{Data.SpaceWalking}</p>
                </div>
              </div>
              <div className="px-6 pt-4 pb-5 flex gap-2">
                <img src={Data.animakidImage} />
                <p>{Data.animakid}</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default HomeComponent;
