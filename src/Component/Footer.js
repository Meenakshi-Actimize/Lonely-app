import Imports from "../Import/Import"

// Footer component in flash page

function Footercomp() {
    const lists = ['New York City', 'Paris', 'Italy', 'Costa Rica', 'Japan', 'USA', 'Amsterdam', 'Portugal', 'Cancún', 'Chicago', 'England', 'Tokyo', 'France', 'Thailand', 'Ireland', 'Rome', 'London', 'Los Angeles', 'Mexico', 'San Francisco', 'Explore More Destinations']

    const lists2 = ['Adventure Travel', 'Art and Culture', 'Beaches, Coasts and Islands', 'Family Holidays', 'Festivals', 'Food and Drink', 'Honeymoon and Romance', 'Road Trips', 'Sustainable Travel', 'Travel on a Budget', 'Wildlife and Nature']

    const lists3 = ['Destination Guides', 'Lonely Planet Kids', 'Lonely Planet Shop', 'Non-English Guides']

    const lists4 = ['About Lonely Planet', 'Contact Us', 'Trade and Advertising', 'Privacy Policy', 'Terms and Conditions', 'Work For Us', 'Write For Us', 'Write For Us', 'Sitemap', 'Consumer Health Data Privacy Policy', 'Cookie Settings', 'Do Not Sell or Share My Personal Information']

    return (
        <>
            <Imports.Container maxWidth={false} sx={{ paddingTop: '60px' }}>
                <Imports.Grid container columns={10}>
                    <Imports.Grid xs={10} sm={10} md={5} lg={4} >
                        {/* First part */}
                        <Imports.Typography variant="h4" sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: '#0057D9' }}><strong>lonely planet</strong></Imports.Typography>
                        <Imports.Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, paddingBottom: '20px' }}>For Explorers Everywhere</Imports.Typography >
                        <Imports.Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, fontSize: '14px', fontWeight: '500' }}><strong>FOLLOW US</strong></Imports.Typography >
                        <Imports.Grid spacing={2} gap={3} sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, paddingBottom: '20px' }}>
                            <Imports.FacebookRoundedIcon sx={{ borderRadius: '50%', bgcolor: '#0057D9', color: 'white', width: '36px', height: '36px', fontSize: '12px', marginLeft: '5px' }} />
                            <Imports.InstagramIcon sx={{ borderRadius: '50%', bgcolor: '#F00073', color: 'white', width: '36px', height: '36px', fontSize: '12px' }} />
                            <Imports.XIcon sx={{ borderRadius: '50%', bgcolor: 'black', color: 'white', width: '36px', height: '36px', fontSize: '12px' }} />
                            <Imports.YouTubeIcon sx={{ borderRadius: '50%', bgcolor: '#FF0000', color: 'white', width: '36px', height: '36px', fontSize: '12px' }} />
                            <Imports.PinterestIcon sx={{ borderRadius: '50%', bgcolor: '#E60023', color: 'white', width: '36px', height: '36px', fontSize: '12px' }} />
                        </Imports.Grid>
                        <Imports.Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, fontSize: '14px', fontWeight: '500', paddingBottom: '10px' }}><strong>BECOME A MEMBER</strong></Imports.Typography>

                        <Imports.Typography variant="h4" sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: '#0057D9', fontSize: '24px' }}>Join The Lovely Planet</Imports.Typography>
                        <Imports.Typography variant="h4" sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: '#0057D9', fontSize: '24px', paddingBottom: '20px' }}>Community of travelers</Imports.Typography>
                        <Imports.Button varaint="contained" sx={{
                            border: '1px solid gray',
                            borderRadius: '18px',
                            bgcolor: '#0057D9',
                            color: 'white',
                            display: 'flex',
                            fontSize: '14px',
                            textTransform: 'none',
                            width: { lg: '26%', md: '26%', sm: '100%', xs: '100%' },
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>Create account</Imports.Button>



                    </Imports.Grid>

                    {/* Second part */}
                    <Imports.Grid xs={10} sm={10} md={5} lg={2} >
                        <Imports.Typography sx={{ fontWeight: 'bold', fontSize: '14px', textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, marginBottom: '5px' }}>TOP DESTINATIONS</Imports.Typography>
                        {lists.map((item, index) => (
                            <>
                                <Imports.Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: 'black', marginBottom: '5px', fontSize: '14px' }}>{item}</Imports.Typography>

                            </>
                        ))}
                    </Imports.Grid>
                    {/* Third part */}
                    <Imports.Grid xs={10} sm={10} md={5} lg={2} >

                        <Imports.Typography sx={{ fontWeight: 'bold', fontSize: '14px', textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, marginBottom: '5px' }}>TRAVEL INTERESTS</Imports.Typography>
                        {lists2.map((item, index) => (
                            <>
                                <Imports.Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: 'black', marginBottom: '5px', fontSize: '14px' }}>{item}</Imports.Typography>

                            </>
                        ))}
                    </Imports.Grid>

                    {/* Fourth part */}
                    <Imports.Grid xs={10} sm={10} md={5} lg={2} >
                        <Imports.Typography sx={{ fontWeight: 'bold', fontSize: '14px', textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, marginBottom: '5px' }}>SHOP</Imports.Typography>
                        {lists3.map((item, index) => (
                            <>
                                <Imports.Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: 'black', marginBottom: '5px', fontSize: '14px' }}>{item}</Imports.Typography>

                            </>
                        ))}

                        <Imports.Typography sx={{ fontWeight: 'bold', fontSize: '14px', textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, marginBottom: '5px', marginTop: '25px' }}>ABOUT US</Imports.Typography>
                        {lists4.map((item, index) => (
                            <>
                                <Imports.Typography sx={{ textAlign: { lg: 'start', md: 'start', sm: 'center', xs: 'center' }, color: 'black', marginBottom: '5px', fontSize: '14px' }}>{item}</Imports.Typography>

                            </>
                        ))}

                    </Imports.Grid>
                </Imports.Grid>
            </Imports.Container>
        </>
    )
}

export default Footercomp;
