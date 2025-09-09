import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Pesan berhasil dikirim!')
      reset()
    } catch (error) {
      toast.error('Gagal mengirim pesan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda. 
          Kirimkan pesan dan kami akan merespons secepat mungkin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Depan
                </label>
                <input
                  {...register('firstName', { required: 'Nama depan wajib diisi' })}
                  type="text"
                  className="input-field"
                  placeholder="Nama depan Anda"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Belakang
                </label>
                <input
                  {...register('lastName', { required: 'Nama belakang wajib diisi' })}
                  type="text"
                  className="input-field"
                  placeholder="Nama belakang Anda"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Format email tidak valid'
                  }
                })}
                type="email"
                className="input-field"
                placeholder="email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subjek
              </label>
              <input
                {...register('subject', { required: 'Subjek wajib diisi' })}
                type="text"
                className="input-field"
                placeholder="Subjek pesan Anda"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Pesan
              </label>
              <textarea
                {...register('message', { 
                  required: 'Pesan wajib diisi',
                  minLength: {
                    value: 10,
                    message: 'Pesan minimal 10 karakter'
                  }
                })}
                rows={6}
                className="input-field resize-none"
                placeholder="Tuliskan pesan Anda di sini..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Kirim Pesan
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@edubloomzone.com</p>
                  <p className="text-gray-600">support@edubloomzone.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                  <p className="text-gray-600">
                    Jl. Pendidikan No. 123<br />
                    Jakarta Selatan 12345<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Jam Operasional</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Senin - Jumat</span>
                <span className="font-medium text-gray-900">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sabtu</span>
                <span className="font-medium text-gray-900">09:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Minggu</span>
                <span className="font-medium text-gray-900">Tutup</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Catatan:</strong> Untuk pertanyaan mendesak di luar jam operasional, 
                Anda dapat mengirimkan email dan kami akan merespons secepat mungkin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
