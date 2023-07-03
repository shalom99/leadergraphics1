import { FC } from 'react'
import { PuffLoader } from 'react-spinners'

type loaderProps = {
  loading: boolean
}

const Loader: FC<loaderProps> = ({loading}) => {
  return (
    loading ? 
<div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center backdrop-blur-3xl">
    <h1>{loading}</h1>
     <PuffLoader
     color="#63cdf5"
     loading={loading}
     size={150}
     aria-label="Loading Spinner"
     data-testid="loader"
   />
</div> : null
)
}

export default Loader