import { useEffect, useRef } from "react"

interface InfiniteScrollProps {
    loadMore: () => void
    isLoading: boolean
}

const InfiniteScroll = ({ loadMore, isLoading }: InfiniteScrollProps) => {
    const observerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (isLoading) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore()
                }
            },
            { rootMargin: "100px" } // começa a carregar um pouco antes do final
        )

        if (observerRef.current) {observer.observe(observerRef.current)}

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current)
        }
    }, [isLoading, loadMore])

    return <div ref={observerRef} className="h-1" /> // marcador invisível no final
}

export default InfiniteScroll