import * as React from "react";
import TimelineItem from "./timelineItems/TimelineItem";
import { TimelineProps } from "@/types";

export default ({itemType, data} : TimelineProps) => (
<div className="timeline">
    {data.map((el, idx) => {
        if(el.id === 'item'){
            return <TimelineItem key={`timeline-item-${itemType}-${idx}`} type={itemType} {...el.data} />
        }else if(el.id === 'header'){
            return(
                <header key={`timeline-header-${itemType}-${idx}`} className="timeline-header">
                    <span className={`tag ${el.medium ? 'is-medium' : ''} has-background-grey has-text-white`}>
                        {el.data}
                    </span>
                </header>   
            )
        }
    })}
</div>)