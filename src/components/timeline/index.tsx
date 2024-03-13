import { MoreVert } from "@mui/icons-material"
import { Avatar, Card, CardContent, CardHeader, Grid, IconButton } from "@mui/material"
import { red } from "@mui/material/colors"


const Timeline = () => {

    return (
        <Grid container height={'100vh'}>

            <Grid item xs={12}>

            </Grid>


            <Grid item xs={12}>

                <Card variant={'outlined'}>

                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="track">
                                T
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVert />
                            </IconButton>
                        }
                        title="Get Up Offa That Thing"
                        subheader="James Brown"
                    />


                </Card>

            </Grid>

            <Grid item xs={12}>

            </Grid>

        </Grid>
    )
}

export default Timeline