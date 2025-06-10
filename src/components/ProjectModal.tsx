"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  id: number;
}

const ProjectModal = ({ id }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMoreClick = async () => {
    if (!content) {
      setLoading(true);
      try {
        const response = await fetch(`/markdowns/${id}.md`);
        if (!response.ok) {
          throw new Error("마크다운 파일을 찾을 수 없습니다.");
        }
        const content = await response.text();
        setContent(content);
      } catch (error) {
        console.error("Error loading markdown:", error);
        setContent("내용을 불러올 수 없습니다.");
      } finally {
        setLoading(false);
      }
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* 더보기 버튼 */}
      <button
        onClick={handleMoreClick}
        className="inline-flex items-center text-gray-600 hover:font-semibold border w-fit px-2 py-1 rounded-md cursor-pointer hover:border-gray-600 border-gray-400 text-sm"
      >
        상세보기
      </button>

      {/* 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 콘텐츠 */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {loading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  <span className="ml-2 text-gray-600">로딩 중...</span>
                </div>
              ) : (
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          {children}
                        </p>
                      ),
                      code: ({ children }) => (
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border">
                          <code className="text-sm">{children}</code>
                        </pre>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside mb-4 space-y-2">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside mb-4 space-y-2">
                          {children}
                        </ol>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 mb-4 bg-blue-50 py-2">
                          {children}
                        </blockquote>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-blue-600 hover:text-blue-800 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;
