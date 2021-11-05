import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CustomInput({ label, action, type, value, placeholder }) {
   const inputFontSize = { style: { fontSize: "1.6rem" } };
   return (
      <Box
         component="form"
         sx={{
            "& > :not(style)": {
               marginBottom: "1.6rem",
               width: "100%",
               backgroundColor: "#FDFAFA",
            },
         }}
         noValidate
         autoComplete="off">
         <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            type={type}
            value={value}
            onChange={action}
            placeholder={placeholder}
            InputProps={inputFontSize}
            InputLabelProps={inputFontSize}
         />
      </Box>
   );
}
