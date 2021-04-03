import { useState, useEffect } from 'react';

export const useOnScreen = (ref) => {

    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        let observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )

        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [ref])

    return isIntersecting
}

export default useOnScreen;