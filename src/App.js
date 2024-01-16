import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from '@mui/material/Avatar';
import { ImCross } from "react-icons/im";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Img from "./popcorn.jpg";
import topFilms from "./Dataset";

function App() {
  const [val, setVal] = useState([]);
  const valHtml = val.map((option, index) => {
    // This is to handle new options added by the user (allowed by freeSolo prop).
    const label = option.title || option;
    return (
      <Chip
        avatar={<Avatar alt="Movie" src={Img} />}
        key={label}
        label={label}
        deleteIcon={<ImCross style={{color:"#86A7FC"}} />}
        style={{padding: "10px", margin: "5px", backgroundColor: "#49108B", color: "white"}}
        onDelete={() => {
          setVal(val.filter(entry => entry !== option));
        }}
      />
    );
  });
  return (
  <div>
    <div style={{borderBlockStyle: "Outset", backgroundColor:"#49108B", color: "white"}}>
      <h1 style={{paddingLeft: "20px"}}> Zepto</h1>
    </div>
    <div style={{display: "flex", flexDirection: "row"}}>
      <div className="selectedTags" style={{marginTop: "10px"}}>{valHtml}</div>
      <div>
      <Autocomplete
        multiple
        id="tags-standard"
        freeSolo
        filterSelectedOptions
        options={topFilms}
        onChange={(e, newValue) => setVal(newValue)}
        getOptionLabel={option => option.title}
        renderTags={() => {}}
        value={val}
        renderInput={params => (
          <TextField
            {...params}
            style={{width:"400px", marginLeft:"10px"}}
            variant="standard"
            placeholder="Search Your Fav Movie"
            margin="normal"
            fullWidth
          />
        )}
      />
      </div>    
    </div>
  </div>
  );
}

export default App;
