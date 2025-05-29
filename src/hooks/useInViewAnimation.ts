import { useEffect, useRef, useState } from "react";

type UseInViewAnimationReturn = {
    ref: React.RefObject<HTMLElement | null>;
    visible: boolean;
}

export const useInViewAnimation = (): UseInViewAnimationReturn => {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.4,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, []);

    return { ref, visible };
}