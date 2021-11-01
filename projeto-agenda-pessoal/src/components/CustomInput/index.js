import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CustomInput({ label, action, type, value, placeholder }) {
   return (
      <Box
         component="form"
         sx={{
            "& > :not(style)": {
               marginBottom: "16px",
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
         />
      </Box>
   );
}
