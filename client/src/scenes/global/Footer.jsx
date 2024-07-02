import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {

  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor="black">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
        
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Trend - Trekker
          </Typography>
          <Typography color="white">
          Trend Trekker is an innovative ecommerce platform that offers a seamless shopping experience for fashion enthusiasts. With a wide range of clothing options and styles, Trend Trekker caters to customers of all ages and preferences. From trendy streetwear to classic formal wear, our platform is designed to help shoppers find the perfect outfit for any occasion.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color="white">
            ABOUT US
          </Typography>
          <Typography mb="30px" color="white">Careers</Typography>
          <Typography mb="30px" color="white">Our Stores</Typography>
          <Typography mb="30px" color="white">Terms & Conditions</Typography>
          <Typography mb="30px" color="white">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color="white">
            CUSTOMER CARE
          </Typography>
          <Typography mb="30px" color="white">Help Center</Typography>
          <Typography mb="30px" color="white">Track Your Order</Typography>
          <Typography mb="30px" color="white">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px" color="white">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color="white">
            CONTACT US
          </Typography>
          <Typography mb="30px" color="white">
            PDEU, Raysan, Gandhinagar, Gujarat 
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }} color="white">
            Email: manav@duck.com
          </Typography>
          <Typography mb="30px" color="white">(+91)7878977455</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;