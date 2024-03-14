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
        <div style={{ width: duration, paddingTop: 20, clear: 'left' }}>
            <Track title="Se Va" artist="Tom & Collins ft. Cumbiafrica" duration={196} />
            <Track title="Vai" artist="Tom & Collins" duration={208} />
            <Track title="Love You Like That" artist="Cloonee" duration={230} />
            <Track title="Stan" artist="TWENTY SIX" duration={128} />
            <Track title="Ain't no other man" artist="Murphy's Law" duration={154} />
            <Track title="Sec Machine" artist="Block & Crown" duration={179} />
            <Track title="Sexy Back" artist="Lucky Luke & Fella" duration={156} />
            <Track title="Asking" artist="Sonny Fodera & MK" duration={187} />
            <Track title="This Is The Sound" artist="Riva Starr" duration={193} />
            <Track title="Nobody" artist="David Penn" duration={235} />
            <Track title="Goldigger" artist="Dennis Cruz" duration={218} />
            <Track title="Magalenha" artist="Joshwa" duration={170} />
            <Track title="Give Me One Reason" artist="Tom & Collins" duration={427} />
        </div>
    )
}

export default Tracks