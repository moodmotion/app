import Text from "@components/text"
import Timeline from "@components/timeline"
import Visual from "@components/visual"
import { Grid } from "@mui/material"



const Composer = () => {

    return (
        <Grid container height={'100vh'}>

            <Grid item xs={8}>
                <Timeline />
            </Grid>

            <Grid item xs={4}>

                <Grid container height={'100vh'} direction={'column'}>

                    <Grid item xs={8}>
                        <Visual />
                    </Grid>

                    <Grid item xs={4}>

                        <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <Text />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Composer