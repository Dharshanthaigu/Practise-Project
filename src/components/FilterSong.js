import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function FilterSong({ filter, setSelectedFilterIndex, selectedFilterIndex }) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedFilterIndex}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#34C94B",
            },
          }}
          aria-label="basic tabs example"
        >
          {filter.map((ele) => (
            <Tab
              className="filter_tab"
              label={ele.label}
              {...a11yProps(0)}
              key={ele.id}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}

export default FilterSong;
