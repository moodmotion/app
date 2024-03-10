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
export const DotLabel = ({ text }: { text: string }) => {

    return (
        <>
            <span style={{ fontSize: 18 }}>{text}</span><span style={{ fontSize: 30 }}>.</span>
        </>
    )
}
