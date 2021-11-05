import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CustomButton({ children, color, size, action }) {
   const style = {
      backgroundColor: color,
      width: Number(size) || "100%",
      height: 50,
      marginBottom: "0.8rem",
      fontSize: "1.2rem",
   };

   return (
      <Stack spacing={2} direction="row">
         <Button variant="contained" style={style} onClick={action}>
            {children}
         </Button>
      </Stack>
   );
}
