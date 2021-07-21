import React from 'react'

interface Panel {
  title?: React.ReactNode
  icon?: String
  className?: React.ReactNode
  action?: React.ReactNode
}

const Panel: React.FC<Panel> = ({
  title,
  icon,
  className,
  action,
  children,
}) => (
  <div className={`panel panel-default ${className || ''}`}>
    <div className='panel-heading'>
      <Row space>
        <Row className='flex-1'>
          {icon && (
            <span className='panel-icon'>
              <span className={`icon ${icon}`} />
            </span>
          )}
          <h6 className='m-b-0'>{title}</h6>
        </Row>
        {action}
      </Row>
    </div>
    <div className='panel-content'>{children}</div>
  </div>
)

Panel.displayName = 'Panel'
export default Panel
