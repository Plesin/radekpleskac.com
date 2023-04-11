import { BrowserRouter } from 'react-router-dom'
import ProjectPreview from '.'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const image = {
  id: 1,
  projectId: 1,
  fileName: 'fotohustopece.webp',
  width: 800,
  height: 600,
  createdAt: new Date('2023-03-27T00:00:00.000Z'),
  updatedAt: new Date('2023-03-27T00:00:00.000Z'),
}
const tech = {
  technology: {
    id: 1,
    name: 'React',
    slug: 'react',
    createdAt: new Date('2023-03-27T00:00:00.000Z'),
    updatedAt: new Date('2023-03-27T00:00:00.000Z'),
  },
}

describe('ProjectPreview', () => {
  const project = {
    id: 1,
    title: 'test project',
    slug: 'test-project',
    description: 'test project description',
    url: '',
    images: [image],
    content: '',
    releaseDate: '2023-03-27T00:00:00.000Z',
    createdAt: '2023-03-27T00:00:00.000Z',
    updatedAt: '2023-03-27T00:00:00.000Z',
    technologies: [tech],
  }
  // TODO - figure out how to satisfy ts here
  const testPreview = (
    <BrowserRouter>
      {/* @ts-ignore */}
      <ProjectPreview project={project} />
    </BrowserRouter>
  )

  it('should render title', () => {
    render(testPreview)
    const heading = screen.getByRole('heading', {
      name: 'test project',
    })
    expect(heading).toBeInTheDocument()
  })

  it('should render description', () => {
    render(testPreview)
    const desc = screen.getByText('test project description')
    expect(desc).toBeInTheDocument()
  })

  it('should render image', () => {
    render(testPreview)
    const img = screen.getByAltText(project.title)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', `./images/${image.fileName}`)
  })

  // TODO - badges and link
})
