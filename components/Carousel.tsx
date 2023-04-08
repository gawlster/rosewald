import React, { useCallback, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface Props {
    children?: React.ReactNode;
    gap?: string;
    pixelsToScroll?: number;
}

const portionOfClientWidthToScroll = 4 / 5;

export default function Carousel(props: Props) {
    const isTouchDevice = false

    const ref = useRef<HTMLDivElement>(null);
    const startX = useRef(-1);
    const initialScroll = useRef(-1);

    const [isHovering, setIsHovering] = useState(false);
    const [atEnd, setAtEnd] = useState(true);
    const [isDragging, setIsDragging] = useState(false);

    const clientWidth = ref.current?.clientWidth ?? 0;
    const scrollWidth = ref.current?.scrollWidth ?? 0;
    const scrollLeft = ref.current?.scrollLeft ?? 0;
    const isOverflowing = clientWidth < scrollWidth;
    const distanceFromRight = scrollWidth - (scrollLeft + clientWidth);
    const distanceFromLeft = scrollLeft;
    const showRightGradient = (isOverflowing && distanceFromRight > 0);
    const showLeftGradient = (isOverflowing && (distanceFromLeft ?? 0) > 0);
    const showRightButton = showRightGradient && (isTouchDevice || isHovering || isDragging);
    const showLeftButton = showLeftGradient && (isTouchDevice || isHovering || isDragging);

    const forceRenderIfNeeded = useCallback(() => {
        if (!atEnd) {
            if ((ref.current?.scrollLeft ?? 0) <= 0 || (ref.current?.scrollLeft ?? 0) + (ref.current?.clientWidth ?? 0) >= (ref.current?.scrollWidth ?? 0)) {
                setAtEnd(true);
            }
        } else {
            if ((ref.current?.scrollLeft ?? 0) > 0 && (ref.current?.scrollLeft ?? 0) + (ref.current?.clientWidth ?? 0) < (ref.current?.scrollWidth ?? 0)) {
                setAtEnd(false);
            }
        }
    }, [atEnd]);

    const handleRightClick = useCallback(() => {
        const target = ref.current;
        if (!target) {
            return;
        }
        if (props.pixelsToScroll) {
            target.scroll({ left: target.scrollLeft + props.pixelsToScroll, top: 0, behavior: "smooth" });
        } else {
            target.scroll({ left: target.scrollLeft + (target.clientWidth * portionOfClientWidthToScroll), top: 0, behavior: "smooth" });
        }
        forceRenderIfNeeded();
    }, [forceRenderIfNeeded, props.pixelsToScroll]);

    const handleLeftClick = useCallback(() => {
        const target = ref.current;
        if (!target) {
            return;
        }
        if (props.pixelsToScroll) {
            target.scroll({ left: target.scrollLeft - props.pixelsToScroll, top: 0, behavior: "smooth" });
        } else {
            target.scroll({ left: target.scrollLeft - (target.clientWidth * portionOfClientWidthToScroll), top: 0, behavior: "smooth" });
        }
        forceRenderIfNeeded();
    }, [forceRenderIfNeeded, props.pixelsToScroll]);

    const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const handleMouseMove = (e: MouseEvent) => {
            if (startX.current === -1 || initialScroll.current === -1) {
                return;
            }
            if (!isDragging) {
                setIsDragging(true);
            }
            e.preventDefault();
            const x = e.pageX;
            const offset = startX.current - x;
            ref.current!.scrollLeft = initialScroll.current + offset;
            forceRenderIfNeeded();
        };
        const handleMouseUp = () => {
            setIsDragging(false);
            startX.current = -1;
            initialScroll.current = -1;
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        };

        startX.current = e.pageX;
        initialScroll.current = scrollLeft;
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
    }, [forceRenderIfNeeded, isDragging, scrollLeft]);

    const handleMouseEnter = useCallback(() => setIsHovering(true), []);
    const handleMouseLeave = useCallback(() => setIsHovering(false), []);

    return (
        <div className="relative w-full px-2" style={{ userSelect: "none" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div
                className="absolute top-0 bottom-0 w-10 h-full flex items-center pointer-events-none z-20 transition-all justify-start -left-3"
                style={{ opacity: showLeftGradient ? "1" : "0", background: "linear-gradient(90deg, #202125 0%, transparent 100%)" }}
            >
                <button
                    type="button"
                    className="bg-bg-light flex justify-center items-center p-2 rounded-full cursor-pointer transition-all hover:bg-white hover:text-bg-dark"
                    onClick={handleLeftClick}
                    style={{ pointerEvents: showLeftButton ? "auto" : "none", opacity: showLeftButton ? "1" : "0" }}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
            <div
                className="w-full overflow-x-scroll hide-scrollbar"
                ref={ref}
                onMouseDown={handleMouseDown}
                onScroll={forceRenderIfNeeded}
                style={{ cursor: isOverflowing ? (isDragging ? "grabbing" : "grab") : "default" }}
            >
                <div style={{ gap: props.gap || 0 }} className="w-fit flex justify-start">
                    {props.children}
                </div>
            </div>
            <div
                className="absolute top-0 bottom-0 w-10 h-full flex items-center pointer-events-none z-20 transition-all justify-end -right-3"
                style={{ opacity: showRightGradient ? "1" : "0", background: "linear-gradient(270deg, #202125 0%, transparent 100%)" }}
            >
                <button
                    type="button"
                    className="bg-bg-light flex justify-center items-center p-2 rounded-full cursor-pointer transition-all hover:bg-white hover:text-bg-bg-dark"
                    onClick={handleRightClick}
                    style={{ pointerEvents: showRightButton ? "auto" : "none", opacity: showRightButton ? "1" : "0" }}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}