import { useTransitionState } from 'view-transition-react'

function App() {
  const [step, setStep] = useTransitionState(0)

  const width = step === 0 ? '1em' : `${20 * (step)}%`

  return (
    <>
      <div
        style={{
          display: 'flex',
          padding: '1em',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          style={{
            width: '8em',
          }}
          onClick={() => setStep((current) => {
            if (current === 0) {
              return 5
            }
            else {
              return current - 1
            }
          })}
        >
          previous
        </button>
        <a
          href="https://github.com/bcheidemann/view-transition-react/blob/main/examples/src/App.tsx"
          target="_blank"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <img src="/github-mark.svg" alt="github" width="16px" height="16px" />
          view source
        </a>
        <button
          style={{
            width: '8em',
          }}
          onClick={() => setStep((current) => {
            if (current === 5) {
              return 0
            }
            else {
              return current + 1
            }
          })}
        >
          next
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '1em',
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: '#1E1E1E',
            borderRadius: '1em',
            overflow: 'hidden',
            display: 'grid',
            rowGap: '1em',
            columnGap: '1em',
            padding: '1em',
            gridTemplateAreas: '"top-left top-right" "bottom-left bottom-right"',
            gridTemplateRows: '1fr 1fr',
          }}
        >
          {step === 0 && (
            <>
              <div style={{
                gridArea: 'top-left',
                backgroundColor: '#770d0d',
                viewTransitionName: 'box-1',
                borderRadius: '1em',
              }} />
              <div style={{
                gridArea: 'top-right',
                backgroundColor: '#0d770d',
                viewTransitionName: 'box-2',
                borderRadius: '1em',
              }} />
              <div style={{
                gridArea: 'bottom-left',
                backgroundColor: '#0d0d77',
                viewTransitionName: 'box-3',
                borderRadius: '1em',
              }} />
              <div style={{
                gridArea: 'bottom-right',
                backgroundColor: '#77770d',
                viewTransitionName: 'box-4',
                borderRadius: '1em',
              }} />
            </>
          )}
          {step === 1 && (
            <>
              <div style={{
                gridArea: 'top-left',
                backgroundColor: '#770d0d',
                viewTransitionName: 'box-1',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
              <div style={{
                gridArea: 'top-right',
                backgroundColor: '#0d770d',
                viewTransitionName: 'box-2',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
              <div style={{
                gridArea: 'bottom-left',
                backgroundColor: '#0d0d77',
                viewTransitionName: 'box-3',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
              <div style={{
                gridArea: 'bottom-right',
                backgroundColor: '#77770d',
                viewTransitionName: 'box-4',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
            </>
          )}
          {step === 2 && (
            <>
              <div style={{
                gridArea: 'top-right',
                backgroundColor: '#770d0d',
                viewTransitionName: 'box-1',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
              <div style={{
                gridArea: 'top-left',
                backgroundColor: '#0d770d',
                viewTransitionName: 'box-2',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
              <div style={{
                gridArea: 'bottom-left',
                backgroundColor: '#0d0d77',
                viewTransitionName: 'box-3',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
              <div style={{
                gridArea: 'bottom-right',
                backgroundColor: '#77770d',
                viewTransitionName: 'box-4',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
            </>
          )}
          {step === 3 && (
            <>
              <div style={{
                gridArea: 'bottom-right',
                backgroundColor: '#770d0d',
                viewTransitionName: 'box-1',
                borderRadius: '1em',
              }} />
              <div style={{
                gridArea: 'bottom-left',
                backgroundColor: '#0d770d',
                viewTransitionName: 'box-2',
                borderRadius: '1em',
              }} />
              <div style={{
                gridArea: 'top-left',
                backgroundColor: '#0d0d77',
                viewTransitionName: 'box-3',
                borderRadius: '1em',
              }} />
              <div style={{
                gridArea: 'top-right',
                backgroundColor: '#77770d',
                viewTransitionName: 'box-4',
                borderRadius: '1em',
              }} />
            </>
          )}
          {step === 4 && (
            <>
              <div style={{
                gridArea: 'bottom-left',
                backgroundColor: '#770d0d',
                viewTransitionName: 'box-1',
                borderRadius: '1em',
              }} />
              <div style={{
                gridArea: 'bottom-right',
                backgroundColor: '#0d770d',
                viewTransitionName: 'box-2',
                borderRadius: '1em',
              }} />
              <div style={{
                gridArea: 'top-right',
                backgroundColor: '#0d0d77',
                viewTransitionName: 'box-3',
                borderRadius: '1em',
              }} />
              <div style={{
                gridArea: 'top-left',
                backgroundColor: '#77770d',
                viewTransitionName: 'box-4',
                borderRadius: '1em',
              }} />
            </>
          )}
          {step === 5 && (
            <>
              <div style={{
                gridArea: 'bottom-left',
                backgroundColor: '#770d0d',
                viewTransitionName: 'box-1',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
              <div style={{
                gridArea: 'bottom-right',
                backgroundColor: '#0d770d',
                viewTransitionName: 'box-2',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
              <div style={{
                gridArea: 'top-right',
                backgroundColor: '#0d0d77',
                viewTransitionName: 'box-3',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
              <div style={{
                gridArea: 'top-left',
                backgroundColor: '#77770d',
                viewTransitionName: 'box-4',
                borderRadius: '1em',
                transform: 'scale(0.75)',
              }} />
            </>
          )}
        </div>
      </div>
      <div>
        <div className="progress" style={{
          width,
          viewTransitionName: 'progress',
          height: '1em',
          backgroundColor: '#666',
        }} />
      </div>
    </>
  )
}

export default App
