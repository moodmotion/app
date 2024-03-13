/*
 * Copyright (C) 2024 MoodMotion.io - All Rights Reserved
 *
 *   ----------------------------
 *    Proprietary and confidential
 *   ----------------------------
 *
 * This file is part of the MoodMotion application
 *
 * Unauthorized copying of this file, via any medium is 
 * strictly prohibited.
 */
import { Track } from "./track"

type TracksProps = {
    duration: number
}

const Tracks = ({ duration }: TracksProps) => {

    return (
        <div style={{ paddingLeft: 60, paddingTop: 10, width: duration, clear: 'left' }}>
            <Track title="Se Va" artist="Tom & Collins ft. Cumbiafrica" duration={196} />
            <Track title="Vai" artist="Tom & Collins" duration={208} />
            <Track title="Love You Like That" artist="Cloonee" duration={230} />
            <Track title="Stan" artist="TWENTY SIX" duration={128} />
            <Track title="Ain't no other man" artist="Murphy's Law" duration={154} />
        </div>
    )
}

export default Tracks