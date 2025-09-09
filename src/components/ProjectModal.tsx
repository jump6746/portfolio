"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Icon from "./Icon";

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
        className="text-gray-400 hover:font-semibold mx-auto hover:text-gray-600 mt-auto w-fit cursor-pointer text-sm sm:text-md"
      >
        상세보기
      </button>

      {/* 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-10"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-2xl max-h-[90vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 콘텐츠 */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] relative">
              <button
                className="absolute top-5 right-5 cursor-pointer"
                onClick={closeModal}
              >
                <Icon name="close" size={36} />
              </button>
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
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-800">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-md sm:text-lg md:text-xl font-semibold mb-4 text-gray-800">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-sm sm:text-md md:text-lg font-semibold mb-3 text-gray-800">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-xs sm:text-sm md:text-md mb-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {children}
                        </p>
                      ),
                      code: ({ children }) => (
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border whitespace-pre-wrap">
                          <code className="text-xs sm:text-sm md:text-md">
                            {children}
                          </code>
                        </pre>
                      ),
                      ul: ({ children }) => (
                        <ul className="text-xs sm:text-sm md:text-md list-disc list-inside mb-4 whitespace-pre-wrap">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="text-xs sm:text-sm md:text-md list-decimal list-inside mb-4 whitespace-pre-wrap">
                          {children}
                        </ol>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 text-xs sm:text-sm md:text-md border-blue-200 pl-4 italic text-gray-600 mb-4 bg-blue-50 py-2">
                          {children}
                        </blockquote>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-blue-600 hover:text-blue-800 underline text-xs sm:text-sm md:text-md"
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
