import React from "react";
import { Button, Grid, Typography } from "@mui/material";
function Footer() {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid  item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Company
          </Typography>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              About
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Blog
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Job
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Partner
            </button>
          </div>
        </Grid>
        <Grid  item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Solutions
          </Typography>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Marketing
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Analytics
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Commerce
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Insights
            </button>
          </div>
        </Grid>
        <Grid  item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Documentation
          </Typography>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Guides
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              API Status
            </button>
         
          </div>
        </Grid>
        <Grid  item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Legal
          </Typography>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Claim
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Privacy
            </button>
          </div>
          <div>
            <button className="pb-5" varient="h6" gutterBottom>
              Terms
            </button>
          </div>
       
        </Grid>
        <Grid className="pt-20" item xs={12}>
            <p>2024 My Company. All rights Reserved.</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
